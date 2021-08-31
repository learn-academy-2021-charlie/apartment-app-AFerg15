class TasksController < ApplicationController

    def index
        tasks = Task.all
        render json: jobs
    end

end
