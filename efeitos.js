$(document).ready(function() {
  $('#pinBoot').pinterest_grid({
  no_columns: 4,
  padding_x: 10,
  padding_y: 10,
  margin_bottom: 50,
  single_column_breakpoint: 700
  });
  
  self.make_layout_change(self);

  setTimeout(function() {
      $(window).resize();
  }, 500);