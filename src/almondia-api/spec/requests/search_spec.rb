require 'rails_helper'

RSpec.describe 'Almondia Categories API', type: :request do
  let!(:categories) { create_list(:first_category, 2000) }

  describe 'GET /categories' do
    # make HTTP get request before each example
    before { get '/categories' }

    it 'returns categories' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(2000)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end