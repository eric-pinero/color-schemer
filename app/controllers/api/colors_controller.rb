class Api::ColorsController < ApplicationController
    def index
        @colors = Color.all
        render :index
    end
    def create
        @color = Color.new(color_params)
        if @color.save
            render :show
        else
            render json: @color.errors.full_messages, status: 422
        end
    end

    def destroy
        @color = Color.find(params[:id])
        if @color.destroy
            render :remove
        else
            render json: @color.errors.full_messages, status: 422
        end
    end


    private
    def color_params
        params.require(:color).permit(:complement_id, :name, :red, :green, :blue)
    end
end