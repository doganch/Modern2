import React from 'react';
import { Code, Palette, Globe, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.'
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence.'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}