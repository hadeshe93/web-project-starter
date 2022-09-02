import React, { Profiler, ProfilerOnRenderCallback } from 'react';

interface Props {
  id: string;
  children: any;
}

export default function withProfiler(props: Props) {
  const onProfilerRender: ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.group('[onProfilerRender]');
    console.log(`id: ${id}`);
    console.log(`phase: ${phase}`);
    console.log(`actualDuration: ${actualDuration}`);
    console.log(`baseDuration: ${baseDuration}`);
    console.log(`startTime: ${startTime}`);
    console.log(`commitTime: ${commitTime}`);
    console.log(`interactions:`, interactions);
    console.groupEnd();
  };
  return (
    <Profiler id={props.id} onRender={onProfilerRender}>
      {props.children}
    </Profiler>
  );
}
