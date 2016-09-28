/* 
   Modulo javascript para cargar todos los js que se necesiten dependiendo de la página en la que nos encontramos
   Tiene en cuenta algunos parametros introducidos en mirai_be_params que configuran la carga de los js:
     * load_booking_entrance    --> Carga o no el js para bookingEntrance soo en caso de bookingstep1
                                     - Si el parametro no está incluido carga el js booking_entrance
                                     - Si es true carga el js booking_entrance
                                     - Si es false no carga el js booking_entrance
     * isBookingStep1Page       --> Especifica si la página actual es bookingstep1
                                     - Si el parametro está incluido carga los script para la página bookingStep1
                                     - En caso contrario carga hace caso a lo que marque la location de la url y el parametro de la url booking_page
*/

var Mirai = Mirai || {};
Mirai.bookingEntranceConfigurator = (function () {
    var self = {
        params: {},
        urlParameters: {},
        initialize: function(params) {
            self.params = params || {};
            self.params.hostsInfo = self._getMiraiHostsInfo();
            self.params.protocol = self._getProtocol();
            self.urlParameters = self.getUrlParameters();
            var scripts = [];
            if (self._isMobileDevice() && !self._isBookingStep1Page()) {
                scripts = self._scriptsForBookingEntranceOnMobileDevice(scripts);
            } else {
                if (self._isBookingStep1Page()) {
                    if (self.params.load_booking_entrance !== false) {
                        scripts = self._scriptsForBookingStep1WithBookingEntrance(scripts);
                    } else {
                        scripts = self._scriptsForBookingStep1(scripts);
                    }
                } else {
                    scripts = self._scriptsForBookingEntrance(scripts);
                }
            }
            scripts = self._add_common_scripts(scripts);
            self._addScripts(scripts);
        },
        
        _add_common_scripts: function(scripts) {
            var jquery_ui_theme = self.params.jquery_ui_theme != null ? self.params.jquery_ui_theme : 'base';

            scripts.push({"type": "css", "docType" : self.params.doctype, "url" : self.params.protocol + "//ajax.googleapis.com/ajax/libs/jqueryui/1.8.11/themes/" + jquery_ui_theme + "/jquery-ui.css"});
            scripts.push({"type": "css", "docType" : self.params.doctype, "url" : self.params.protocol + "//" + self.params.hostsInfo.js + "/images/loader.gif", "image" : true});
            
            return scripts;
        },
        
        _scriptsForBookingStep1: function(scripts) {
            scripts.push({"type": "js", "url" : self.params.protocol + "//" + self.params.hostsInfo.js + "/room_selection_v2_1473412154.js"});
            scripts.push({"type": "css", "docType" : self.params.doctype, "url" : self.params.protocol + "//" + self.params.hostsInfo.js + "/revalidate/room_selection_v2_1473412154.css"});
         
            return scripts;
        },
        
        _scriptsForBookingEntrance: function(scripts) {
            scripts.push({"type": "js", "url" : self.params.protocol + "//" + self.params.hostsInfo.js + "/booking_entrance_v2_1473412154.js"});
            scripts.push({"type": "css", "docType" : self.params.doctype, "url" : self.params.protocol + "//" + self.params.hostsInfo.js + "/revalidate/booking_entrance_v2_1473412154.css"});
            
            return scripts;
        },
        
        _scriptsForBookingStep1WithBookingEntrance: function(scripts) {
            scripts.push({"type": "js", "url" : self.params.protocol + "//" + self.params.hostsInfo.js + "/room_selection_with_booking_entrance_v2_1473412154.js"});
            scripts.push({"type": "css", "docType" : self.params.doctype, "url" : self.params.protocol + "//" + self.params.hostsInfo.js + "/revalidate/room_selection_with_booking_entrance_v2_1473412154.css"});
            
            return scripts;
        },
        
        _scriptsForBookingEntranceOnMobileDevice: function(scripts) {
            scripts.push({"type": "js", "url" : self.params.protocol + "//" + self.params.hostsInfo.js + "/jquery/jquery.min.js"});
            scripts.push({"type": "js", "url" : self.params.protocol + "//" + self.params.hostsInfo.js + "/booking_entrance_m_1473412154.js"});
            
            return scripts;
        },
        
        _isUsingChain: function() {
            return mirai_be_params.idchain;
        },
        
        _addScripts: function(scripts) {
            for (var i = 0; i < scripts.length; i++) {
                var script = scripts[i];
                if (script.type == "js") {
                    document.write('<' + 'script src="' + script.url + '" type="text/javascript"><' + '/script>');
                } else if (script.type == "css") {
                    if (script.image) {
                        document.write('<' + 'link href="' + script.url + '" type="image/gif" media="screen" ' + (script.docType == "html4" ? '/' : '') + '>');
                    } else {
                        document.write('<' + 'link href="' + script.url + '" rel="stylesheet" type="text/css" media="screen" ' + (script.docType == "html4" ? '/' : '') + '>');
                    }
                }
            }
        },
        
        _getMiraiHostsInfo: function() {
            var scripts = document.getElementsByTagName('script');
            for (var i = 0; i < scripts.length; i++) {
                var script = scripts[i];
                if (script.src.match("be_dependencies")) {
                    var domain = script.src.match(/\/\/([^\/]*)/)[1];
                    return self._getMiraiServers(domain);
                }
            }
        },
        
        _getMiraiServers: function(domain) {
            var domainParts = domain.split('.');
            var miraiEnv = domainParts.length > 3 ? domainParts[0] + ".": "";

            return {'book'  : miraiEnv + "reservation.miraiglobal.com", 
                    'track' : miraiEnv + "track.miraiglobal.com", 
                    'cdn'   : miraiEnv + "cdn0.miraiglobal.com",
                    'env'   : miraiEnv == "" ? 'production' : miraiEnv,
                    'js'    : miraiEnv + "js.miraiglobal.com"};
        },
        
        _getProtocol: function() {
            return (window.location.protocol == 'file:' ? 'http:' : '');
        },

        _isBookingStep1Page: function() {
            return document.location.href.match(/bookingstep1/) != null || document.location.href.match(/step=1/) != null ||
                   (typeof self.urlParameters.bookingpage != "undefined" && self.urlParameters.bookingpage != "" && document.location.href.match(self.urlParameters.bookingpage) != null && !self._isUsingChain()) ||
                   self.params.isBookingStep1Page;
        },

        _isMobileDevice: function(){
            var ua = navigator.userAgent;
            var checker = {
              iphone: ua.match(/(iPhone|iPod)/),
              blackberry: ua.match(/BlackBerry/),
              android: ua.match(/Android/) && ua.match(/Mobile/),
              windowsPhone: ua.match(/Windows Phone [1-9]/i),
              nokia: ua.match(/Nokia/),
              operaMobile: ua.match(/Opera Mobi/)
            };
            return checker.android || checker.iphone || checker.blackberry || checker.windowsPhone || checker.nokia || checker.operaMobile;
        },
        
        /**
         * Get parameters from url and returns a map where:
         * - key = unescaped parameter name
         * - value = unescaped parameter value
         */
        getUrlParameters: function(url) {
            var queryString = url ? url.replace(/^[^\?]+\??/, '') : document.location.href.replace(/^[^\?]+\??/, '');
            return self._extractParametersFromQueryString(queryString);
        },

        _extractParametersFromQueryString: function(queryString) {
            var parameters = {};
            if (queryString) {
                var arrUrlSection = queryString.split(/[;#]/)[0];
                var arrParams = arrUrlSection.split(/[;&]/);
                for (var j=0; j<arrParams.length; j++) {
                    var value = arrParams[j];
                    var keyVal = value.split('=');
                    if (keyVal.length == 2) {
                        parameters[decodeURIComponent(keyVal[0])] = decodeURIComponent(keyVal[1]).replace(/\+/g, ' ');
                    }
                }
            }
            return parameters;
        }
    };
    
    return {
        initialize: self.initialize,
        getUrlParamaters: self.getUrlParameters
    }
}());

if ( typeof mirai_be_params == "undefined" )
    mirai_be_params = {};

Mirai.bookingEntranceConfigurator.initialize(mirai_be_params);