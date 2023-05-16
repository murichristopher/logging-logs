class Api::BaseController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActionController::ParameterMissing, with: :parameter_missing
  rescue_from NoMethodError, with: :internal_server_error

  protected

  def render_json(object, status)
    render json: object, status:
  end

  private

  def internal_server_error
    render_json({ message: 'Internal server error' }, 500)
  end

  def parameter_missing(message)
    render_json({ message: }, 400)
  end

  def not_found(message)
    render_json({ message: }, 404)
  end
end
