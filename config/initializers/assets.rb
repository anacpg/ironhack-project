# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w( creative.css )
Rails.application.config.assets.precompile += %w( magnific-popup.css )
Rails.application.config.assets.precompile += %w( creative.js )
Rails.application.config.assets.precompile += %w( magnific-popup.js )
Rails.application.config.assets.precompile += %w( scrollreveal.js )
