const express = require('express');
const router = express.Router();
const { Venue, Event } = require('../Models/store');

// Venue routes
router.get('/venues', async (req, res) => {
     try {
          const venues = await Venue.find();
          res.json(venues);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
     }
});

router.get('/venues/:id', async (req, res) => {
     try {
          const venue = await Venue.findById(req.params.id);
          if (!venue) {
               return res.status(404).json({ message: 'Venue not found' });
          }
          res.json(venue);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
     }
});

router.post('/venues', async (req, res) => {
     try {
          const venue = new Venue(req.body);
          await venue.save();
          res.status(201).json(venue);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
     }
});

router.put('/venues/:id', async (req, res) => {
     try {
          const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, { new: true });
          if (!venue) {
               return res.status(404).json({ message: 'Venue not found' });
          }
          res.json(venue);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
     }
});

// Event routes
router.get('/events', async (req, res) => {
     try {
          const events = await Event.find();
          res.json(events);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
     }
});

router.get('/events/:id', async (req, res) => {
     try {
          const event = await Event.findById(req.params.id);
          if (!event) {
               return res.status(404).json({ message: 'Event not found' });
          }
          res.json(event);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
     }
});

router.post('/events', async (req, res) => {
     try {
          const event = new Event(req.body);
          await event.save();
          res.status(201).json(event);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
     }
});

router.put('/events/:id', async (req, res) => {
     try {
          const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
          if (!event) {
               return res.status(404).json({ message: 'Event not found' });
          }
          res.json(event);
     } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
     }
});

module.exports = router;