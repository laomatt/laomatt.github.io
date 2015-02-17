num=["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]


j=0
for i in (101..113)
  puts "#{num[j]}_of_diamonds = {file: \"#{num[j]}_of_diamonds.png\", value: #{j+1}},"
  j+=1
end

j=0
for i in (114..126)
  puts "#{num[j]}_of_clubs = {file: \"#{num[j]}_of_clubs.png\", value: #{j+1}},"
  j+=1
end

j=0
for i in (127..139)
  puts "#{num[j]}_of_hearts = {file: \"#{num[j]}_of_hearts.png\", value: #{j+1}},"
  j+=1
end


j=0
for i in (140..152)
  puts "#{num[j]}_of_spades = {file: \"#{num[j]}_of_spades.png\", value: #{j+1}},"
  j+=1
end

