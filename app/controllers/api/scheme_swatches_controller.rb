class Api::SchemeSwatchesController < ApplicationController
    def create
        @scheme_swatch = SchemeSwatch.new(scheme_swatch_params)
        if @scheme_swatch.save!
            render :show
        else
            render json: @scheme_swatch.errors.full_messages, status: 422
        end
    end

    def destroy
        @scheme_swatch = SchemeSwatch.find(params[:id])
        if @scheme_swatch.destroy
            render :remove
        else
            render json: @scheme_swatch.errors.full_messages, status: 422
        end
    end


    private
    def scheme_swatch_params
        params.require(:schemeSwatch).permit(:color_id, :scheme_id)
    end
end