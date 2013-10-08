module SessionsHelper
  def current_user
    return nil unless session[:token]
    @current_user ||= User.includes(:member_boards).find_by_token(session[:token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    user.set_token
    user.save
    session[:token] = user.token
  end

  def logout!
    current_user.set_token
    current_user.save
    session[:token] = nil
  end

  private
  def logged_in_clearance
    unless logged_in?
      flash[:errors] = "You must be logged in to do that."
      redirect_to new_session_url
    end
  end

  def personal_clearance
    unless logged_in? && current_user.id == params[:id]
      redirect_to logged_in? ? user_url(current_user) : new_session_url
    end
  end

  def member_clearance
  end
end
