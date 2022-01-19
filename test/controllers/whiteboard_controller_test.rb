require "test_helper"

class WhiteboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get whiteboard_index_url
    assert_response :success
  end
end
