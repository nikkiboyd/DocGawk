import DoctorService from './doctor-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#find-doctor-by-name').click(function(event) {
    event.preventDefault();
    $('.errors').fadeOut();
    $(".doctor-matches").html("");
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    $('#first-name').val("");
    $("#last-name").val("");

    let doctorService = new DoctorService();
    let promise = doctorService.getPortlandDoctorsByName(firstName, lastName);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      if (body.data.length > 0) {
        $('.errors').fadeOut();
        for (let i = 0; i < body.data.length; i++) {
          $('.doctor-matches').append(`<div class='card center'>
                                          <h4>${body.data[i].practices[i].name}</h4>
                                          <h6>Address:</h6><p>${body.data[i].practices[i].visit_address.street}<br>${body.data[i].practices[i].visit_address.city}, ${body.data[i].practices[i].visit_address.state} ${body.data[i].practices[i].visit_address.zip}</p>
                                          <h6>Phone:</h6><p>${body.data[i].practices[i].phones[i].number}
                                          <h6>Accepting New Patients:</h6><p>${body.data[i].practices[i].accepts_new_patients}
                                          <h6>Website:</h6><p>${body.data[i].practices[i].website}`);
          var yes = $("body").html().replace(/true/g, 'Yes');
          $("body").html(yes);
          var no = $("body").html().replace(/false/g, 'No');
          $("body").html(no);
          var noWebsite = $("body").html().replace(/undefined/g, 'Not found');
          $("body").html(noWebsite);
          $('.doctor-matches').fadeIn();
        }
      } else if (body.data.length === 0) {
        $('.errors').fadeIn();
      }
    }, function(error) {
      console.log(error);
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#find-doctor-by-symptom').click(function(event) {
    event.preventDefault();
    $('.errors').fadeOut();
    $(".doctor-matches").html("");
    let symptom = $('#symptom').val();

    let doctorService = new DoctorService();
    let promise = doctorService.getPortlandDoctorsBySymptom(symptom);
    promise.then(function(response) {
      let body = JSON.parse(response);
      if (body.data.length > 0) {
        $('.errors').fadeOut();
        for (let i = 0; i < body.data.length; i++) {
          $('.doctor-matches').append(`<div class='card center'>
                                            <h4>${body.data[i].practices[i].name}</h4>
                                            <h6>Address:</h6><p>${body.data[i].practices[i].visit_address.street}<br>${body.data[i].practices[i].visit_address.city}, ${body.data[i].practices[i].visit_address.state} ${body.data[i].practices[i].visit_address.zip}</p>
                                            <h6>Phone:</h6><p>${body.data[i].practices[i].phones[i].number}
                                            <h6>Accepts New Patients:</h6><p>${body.data[i].practices[i].accepts_new_patients}
                                            <h6>Website:</h6><p>${body.data[i].practices[i].website}`);
          var yes = $("body").html().replace(/true/g, 'Yes');
          $("body").html(yes);
          var no = $("body").html().replace(/false/g, 'No');
          $("body").html(no);
          var noWebsite = $("body").html().replace(/undefined/g, 'Not found');
          $("body").html(noWebsite);
          $('.doctor-matches').fadeIn();
        }
      } else if (body.data.length === 0) {
        $('.errors').fadeIn();
      }
    }, function(error) {
      $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
