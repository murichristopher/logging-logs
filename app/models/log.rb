class Log < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { minimum: 3 }
  # broadcasts_to :logs

  max_paginates_per 20

  # before_save :set_name

  before_validation :set_name
  before_create :set_context
  before_create :set_output

  # after_create_commit -> { broadcast_prepend_to "quotes" }
  after_create_commit lambda {
                        broadcast_prepend_to "logs", partial: "logs/log", locals: { quote: self },
                                                     target: "logs"
                      }

  def created_at_formatted
    created_at.in_time_zone('America/Sao_Paulo').strftime('%d/%m/%Y %H:%M:%S')
  end

  def set_name
    self.name = project_name + ' - ' + file_name + ':' + file_number
  end

  def set_output
    # self.output = eval(output).inspect.gsub(/"([^"]*)"/) { "'#{$1}'" }

    self.output = eval(output).to_json

  rescue StandardError => e
    self.output = { message: output }.to_json
  end

  private


  def set_context
    return unless context

    parsed_array = JSON.parse(context)

    self.context = parsed_array.join
  end
end
