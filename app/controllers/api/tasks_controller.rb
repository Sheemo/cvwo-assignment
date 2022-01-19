class Api::TasksController < ApplicationController
  def index
    task = Task.all
    render json: task
  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
  end
end
