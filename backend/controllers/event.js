const router = require('express').Router();
const Event = require('../Models/event.js');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('organizer', 'username email');
    res.status(200).send(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Get a specific event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('organizer', 'username email');
    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }
    res.status(200).send(event);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Create a new event
router.post('/', async (req, res) => {
  try {
    const event = new Event({
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
      location: {
        address: req.body.location.address,
        city: req.body.location.city,
        state: req.body.location.state,
        country: req.body.location.country,
        postalCode: req.body.location.postalCode
      },
      organizer: req.body.organizer,
      categories: req.body.categories,
      ticketInfo: {
        price: req.body.ticketInfo.price,
        currency: req.body.ticketInfo.currency,
        availability: req.body.ticketInfo.availability
      },
      images: req.body.images
    });

    await event.save();
    res.status(201).send({ message: 'Event created successfully', event });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Update an existing event
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
      location: {
        address: req.body.location.address,
        city: req.body.location.city,
        state: req.body.location.state,
        country: req.body.location.country,
        postalCode: req.body.location.postalCode
      },
      organizer: req.body.organizer,
      categories: req.body.categories,
      ticketInfo: {
        price: req.body.ticketInfo.price,
        currency: req.body.ticketInfo.currency,
        availability: req.body.ticketInfo.availability
      },
      images: req.body.images
    }, { new: true });

    if (!updatedEvent) {
      return res.status(404).send({ message: 'Event not found' });
    }

    res.status(200).send({ message: 'Event updated successfully', updatedEvent });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);

    if (!deletedEvent) {
      return res.status(404).send({ message: 'Event not found' });
    }

    res.status(200).send({ message: 'Event deleted successfully', deletedEvent });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
