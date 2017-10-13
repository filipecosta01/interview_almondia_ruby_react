class CategoriesController < ApplicationController

  def index
    categories = [
      FirstCategory.all,
      SecondCategory.all,
      ThirdCategory.all
    ]
    json_response(format_result_to_name_category(categories).flatten)
  end

  def format_result_to_name_category(result)
    result.map.with_index do |category, i|
      category.map{|elements|
        [
          value: elements.name,
          label: elements.name + ' (' + (i == 0 ? 'FirstCategory' : i == 1 ? 'SecondCategory' : 'ThirdCategory') + ') '
        ]
      }
    end
  end

end
