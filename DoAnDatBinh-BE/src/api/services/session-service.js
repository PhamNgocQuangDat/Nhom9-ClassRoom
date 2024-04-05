
const { generateKey } = require('crypto');
const Session = require('../models/session-model');
const { generateId } = require('../helpers/generate-key');

class SessionService {
  static async getSessionById(sessionId) {
    return Session.findByPk(sessionId);
  }
  static async getAllSession() {
    return Session.findAll();
  }
  static async createSession(sessionData) {
    sessionData.sessionId = generateId()
    return Session.create(sessionData);
  }
  static async createMultipleSessions(sessionDataArray) {
    const generatedIds = sessionDataArray.map(data => {
      return { ...data, sessionId: generateId() };
    });
    return Session.bulkCreate(generatedIds);
  }
  static async updateSession(sessionId, sessionData) {
    await Session.update(sessionData, {
      where: { sessionId: sessionId },
    });
    return this.getSessionById(sessionId);
  }

  static async deleteSessionById(sessionId) {
    return Session.destroy({
      where: { sessionId: sessionId },
    });
  }
}

module.exports = SessionService;
