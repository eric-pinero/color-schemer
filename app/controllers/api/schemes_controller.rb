class Api::SchemesController < ApplicationController
    def create
        @scheme = Scheme.new(scheme_params)
        if @scheme.save
            render :show
        else
            render json: @scheme.errors.full_messages, status: 422
        end
    end

    def show
        @scheme = Scheme.find(params[:id])
    end

    def update
        @scheme = Scheme.find(params[:id])

        if @scheme.update(scheme_params)
            render :show
        else
            render json: @scheme.errors.full_messages, status: 422
        end
    end

    def destroy
        @scheme = Scheme.find(params[:id])

        if @scheme.destroy
            render :remove
        else
            render json: @scheme.errors.full_messages, status: 422
        end
    end

    private
    def scheme_params
        params.require(:scheme).permit(:title, :owner_id, :swatch_obj)
    end
end