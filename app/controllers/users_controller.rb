class UsersController < ApplicationController

	before_action :authenticate_user!, only: [:index]

	def index
		@users = User.all
		@user = current_user

		# render json: @users.to_json

	end

	def show

	end

	def search
		
		@users = User.where(['email LIKE ?', "%#{params[:query]}%"]).limit(5)
		gon.emails = @users.pluck(:email)

		puts gon.all_variables


		# render :search
		# render gon.rabl
		gon.rabl
	end





end
