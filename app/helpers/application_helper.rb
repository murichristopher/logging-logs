module ApplicationHelper
  include ActionView::Helpers::DateHelper

  def formatted_time(created_at)
    time_ago = time_ago_in_words(created_at)

    time_ago.gsub!('about ', '')
    time_ago.gsub!(' hours', 'hrs')
    time_ago.gsub!(' hour', 'h')
    time_ago.gsub!(' minutes', 'm')
    time_ago.gsub!(' minute', 'm')
    time_ago.gsub!(' seconds', 's')
    time_ago.gsub!(' second', 's')

    "#{time_ago} ago"
  end

  def truncate(string, max)
    return unless string
    string.length > max ? "#{string[0...max]}..." : string
  end
end
