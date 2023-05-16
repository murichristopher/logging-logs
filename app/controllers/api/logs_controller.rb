class Api::LogsController < Api::BaseController
  def show
    @log = Log.find(params[:id])

    render json: @log.to_json, status: 200
  end

  def create
    log = Log.new(log_params)

    if log.save
      render json: log.to_json, status: 201
    else
      render json: { errors: log.errors.full_messages }, status: 422
    end
  end

  private

  def log_params
    params.permit(:name, :project_name, :file_name, :file_number, :output, :tag, :target_self,
                  :context)
  end
end
