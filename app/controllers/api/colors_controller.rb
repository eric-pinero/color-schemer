class Api::ColorsController < ApplicationController
    def index
        @colors = Color.all
        render :index
    end
end