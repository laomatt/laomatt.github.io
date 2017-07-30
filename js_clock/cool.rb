require 'net/http'

def cool?(number)
	arr = number.to_s.split('')

	sum = 0

	arr.each do |num|
		number = num.to_i

		sum += number ** 2
	end

	if sum == 4
		return false
	elsif sum == 1
		return true
	else
		cool?(sum)
	end
end

def sum_cool(num)
	i = 0
	sum = 0

	while i <= num
		i += 1
		if cool?(i)
			p "#{i} cool"
			sum += i
		else
			p "#{i} not cool"
		end
	end

	# p cool?(22)
	puts '----'
	sum
end


def send(sum)
	# 70601040511
	uri = URI('http://166.78.22.78/dev/open-sesame.php')
	res = Net::HTTP.post_form(uri, 'code' => sum)
	puts res.body
	
end
# p sum_cool(1000000)
send(70601040511)