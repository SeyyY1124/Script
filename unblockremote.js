var body = $response.body;
body = '\/*\n@supported D2C25002DCA4\n*\/\n' + body;

$done(body);
