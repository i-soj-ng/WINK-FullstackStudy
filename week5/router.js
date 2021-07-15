module.exports = function(app, Board) {
    app.post('/boards', function(req, res) {
        const board = new Board();
        board.title = req.body.title;
        board.body = req.body.body;

        board.save(function(err) {
            if(err) {
                console.error(err);
                res.json({ message : '생성 실패' });
                return;
            }
            res.json({ message : '생성 완료' });
        });
    });
}