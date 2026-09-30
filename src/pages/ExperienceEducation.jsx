import React from 'react';

export default function ExperienceEducation() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto px-gutter py-space-xl flex flex-col gap-space-lg">
        <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          Experience & Education
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          <div className="flex flex-col gap-space-md">
            <h2 className="font-headline-md text-headline-md text-primary">Experience</h2>
            <div className="bg-surface-container-low p-space-md rounded-xl shadow-md">
              <h3 className="font-headline-md text-body-lg text-on-surface font-semibold">Data Associate</h3>
              <p className="font-body-sm text-body-sm text-outline">Present</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Focused on data pipeline architectures, validation scripts, and robust analytical models. 
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-space-md">
            <h2 className="font-headline-md text-headline-md text-tertiary">Education</h2>
            <div className="bg-surface-container-low p-space-md rounded-xl shadow-md">
              <h3 className="font-headline-md text-body-lg text-on-surface font-semibold">Bachelor of Technology / Computer Science</h3>
              <p className="font-body-sm text-body-sm text-outline">Graduated</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Strong foundation in algorithms, systems architecture, and software engineering principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
