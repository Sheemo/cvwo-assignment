class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :TaskId
      t.string :Name
      t.string :Description
      t.string :Category

      t.timestamps
    end
  end
end
