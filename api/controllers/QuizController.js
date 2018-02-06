/**
 * QuizController
 *
 * @description :: Server-side logic for managing quizzes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    home: function (req, res) {
        return res.view(
            'quizHome.ejs',
            {
                date: new Date()
            }
        );
    },

    show: function(req, res)
    {
        return res.view(
            'quizShow.ejs',
            {
                date: new Date()
            }
        );
    },


    /*
    API route
     */
    register: function (req, res) {
        var userValues = {};
        userValues.firstname = req.body.firstname;
        userValues.lastname = req.body.lastname;
        userValues.email = req.body.email;

        User.create(userValues).exec(function (err, finn){
            if (err) {
                return res.serverError(err);
            }

            sails.log('User\'s id is:', finn.id);
            return res.json(200, {
                status: 'ok'
            });
        });
    }
};
