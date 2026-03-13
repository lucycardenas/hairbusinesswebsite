import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    stylist: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl mb-4 text-primary">Booking Confirmed!</h2>
          <p className="text-foreground mb-8">
            Thank you for booking with Belle Hair Studio. We've sent a confirmation
            email to {formData.email}. We look forward to seeing you!
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Book Another Appointment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4 text-primary">Book Your Appointment</h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Select your preferred service, stylist, and time. We'll confirm your
            appointment shortly.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white border border-border rounded-lg p-8">
              <h2 className="text-2xl mb-6 text-primary">Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="bg-white border border-border rounded-lg p-8">
              <h2 className="text-2xl mb-6 text-primary">Appointment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="mt-2"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Preferred Time *</Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleChange("time", value)}
                    required
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="service">Service *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange("service", value)}
                    required
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="womens-cut">Women's Haircut</SelectItem>
                      <SelectItem value="mens-cut">Men's Haircut</SelectItem>
                      <SelectItem value="color">Hair Coloring</SelectItem>
                      <SelectItem value="highlights">Highlights/Balayage</SelectItem>
                      <SelectItem value="blowout">Blowout</SelectItem>
                      <SelectItem value="styling">Special Event Styling</SelectItem>
                      <SelectItem value="treatment">Hair Treatment</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="stylist">Preferred Stylist</Label>
                  <Select
                    value={formData.stylist}
                    onValueChange={(value) => handleChange("stylist", value)}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="No preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">No Preference</SelectItem>
                      <SelectItem value="sarah">Sarah - Senior Stylist</SelectItem>
                      <SelectItem value="emma">Emma - Color Specialist</SelectItem>
                      <SelectItem value="olivia">Olivia - Master Stylist</SelectItem>
                      <SelectItem value="sophia">Sophia - Stylist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    placeholder="Any specific requests or information we should know?"
                    className="mt-2"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-12"
              >
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
