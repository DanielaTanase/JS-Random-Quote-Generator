const quotes = [
	"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
	"The way to get started is to quit talking and begin doing. -Walt Disney",
	"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
	"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
	"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
	"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
	if (usedIndexes.size >= quotes.length) {
		usedIndexes.clear();
	}

	while (true) {
		const randomIdx = Math.floor(Math.random() * quotes.length)

		if (usedIndexes.has(randomIdx)) continue

		const quote = quotes[randomIdx]
		quoteElement.innerHTML = quote;
		usedIndexes.add(randomIdx)
		break
	}

}
