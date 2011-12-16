require_relative 'base_test'

require 'js/rule/new_object_and_new_array'

module XRayTest
  module JS
    module Rule
      
      class NewObjectAndNewArrayTest < BaseTest

        def test_default
          js = '
            new Object();
          '
          message, level = visit js
          assert_equal :error, level

          js = '
            new Array();
          '
          message, level = visit js
          assert_equal :error, level
        end
        
        private

        def visit(js)
          expr = parse js, 'expr_new'
          rule = XRay::JS::Rule::NewObjectAndNewArray.new
          rule.visit_expr_new expr
        end

      end

    end
  end
end
