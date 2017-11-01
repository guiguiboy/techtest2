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

    register: function (req, res) {

        console.log(req.body);

        //that's it for the moment, @todo next time
        //create the new user
        //compute register date
        //redirect to quiz page 1
    }
};
