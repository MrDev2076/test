const db = require('../config/db');

exports.getSettingsPage = async (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }

  try {
    const userId = req.session.user.id;
    res.render('settings', { user: req.session.user });
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.redirect('/login');
  }
};
