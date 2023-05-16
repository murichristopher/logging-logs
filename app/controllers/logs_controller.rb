class LogsController < ApplicationController
  def index
    @page = params[:page] || 1

    @logs = Log.order('created_at desc').page @page

    respond_to do |format|
      format.html
      format.turbo_stream
    end
  end

  def show
    @log = Log.find(params[:id])

    render :react
  end

  def new
    @log = Log.new
  end

  def create
    @log = Log.new(log_params)

    if @log.save
      respond_to do |format|
        format.html { redirect_to root_path, notice: "Quote was successfully destroyed." }
        format.turbo_stream
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def log_params
    params.require(:log).permit(:name)
  end
end
