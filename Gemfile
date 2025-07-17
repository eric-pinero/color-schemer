source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.3.0'

gem 'rails', '~> 7.1.0'
gem 'pg', '~> 1.5'
gem 'puma', '~> 6.4'
# SCSS is now handled via dart-sass or cssbundling-rails in Rails 7
# gem 'sass-rails', '~> 5.0'
# Uglifier is not needed with esbuild/jsbundling-rails
# gem 'uglifier', '>= 1.3.0'
# CoffeeScript is deprecated; remove coffee-rails
# gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.11'
gem 'bcrypt', '~> 3.1.18'
gem 'annotate'
gem 'bootsnap', '>= 1.16.0', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 4.2.0'
  gem 'listen', '~> 3.8'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'
end

group :test do
  gem 'capybara', '>= 3.39'
  gem 'selenium-webdriver'
  # chromedriver-helper is deprecated; use webdrivers instead
  gem 'webdrivers'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
