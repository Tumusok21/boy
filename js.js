
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
        var voiceRecognition = new SpeechRecognition();

        // Set language to English (United States)
        voiceRecognition.lang = 'en-US';

        // Disable interim results
        voiceRecognition.interimResults = false;

        // Set the maximum number of alternative transcripts to 5
        voiceRecognition.maxAlternatives = 5;

        // Function to send email
        function sendEmail(message) {
            // Replace these values with your own
            var serviceID = 'service_vhd4oxe';
            var templateID = 'template_m4sjjzb';
            var userID = 'WYSlMAeNnyMMaOoSe';

            // Prepare email parameters
            var templateParams = {
                to_email: 'dominictumusok12@gmail.com',
                message: message
            };

            // Send the email
            emailjs.send(serviceID, templateID, templateParams, userID)
                .then(function(response) {
                    console.log('Email sent successfully', response);
                }, function(error) {
                    console.error('Email sending failed', error);
                });
        }

        voiceRecognition.onresult = function(event) {
            var recordedVoice = event.results[0][0].transcript;
            document.getElementById('testid').innerHTML = recordedVoice;

            // Send email with recorded voice message
            sendEmail(recordedVoice);
        };

        // Start voice recognition when the page loads
        voiceRecognition.start();