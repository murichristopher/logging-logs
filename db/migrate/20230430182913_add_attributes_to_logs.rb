class AddAttributesToLogs < ActiveRecord::Migration[7.0]
  def change
    add_column :logs, :project_name, :string
    add_column :logs, :file_name, :string
    add_column :logs, :file_number, :string
    add_column :logs, :context, :string
    add_column :logs, :output, :string
    add_column :logs, :tag, :string
    add_column :logs, :target_self, :string
  end
end
