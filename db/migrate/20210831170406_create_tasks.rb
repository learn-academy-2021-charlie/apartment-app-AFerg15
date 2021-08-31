class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.string :category
      t.string :urgency
      t.string :hours
      t.integer :user_id

      t.timestamps
    end
  end
end
