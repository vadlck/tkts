const express = require('express')
	, app = express()
	, path = require('path')
	, port = 8080
	;


app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/tickets', (req, res) => {
	res.send(
		require('./tickets.json')
			.map(ticket => {
				ticket._t_currencySymbol = '₽';
				return ticket;
			})
	);
});

app.get('/api/exchange-rates', (req, res) => {
	res.send({ 'USD': 0.0160, 'EUR': 0.0137, 'RU': 1 });
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
	res.send(err.stack);
})

app.listen(port, (err) => {
	console.log(err || `server is listening on ${port}`)
})