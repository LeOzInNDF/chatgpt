
module.exports ={

  async sendText(request, response) {
      return response.status(200).json({
        message: "Caio castro chegou no rolê"
      })
  }
}