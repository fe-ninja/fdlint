# encoding: utf-8

require_relative '../helper'

require 'node'
require 'log_entry'
require 'css/struct'
require 'css/rule/checklist'

module XRayTest
  module CSS
      
    class MacLineEndSupportTest < Test::Unit::TestCase

      def setup
        @runner = XRay::Runner.new :encoding => 'gb2312'
      end

      def test_check_mac_line_end_with_good_css
        file = "#{FIXTURE_PATH}/css/mac-line-sep-good.css"
        results = @runner.check_css_file file

        assert results.empty?, "Mac style line end should be supported"
      end

      def test_check_mac_line_end_with_error_css
        file = "#{FIXTURE_PATH}/css/mac-line-sep-err.css"
        results = @runner.check_css_file file

        assert_equal 1, results.size, "check as usual"
      end


    end

  end
end

