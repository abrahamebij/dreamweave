function Waveform() {
  return (
    <div className="flex items-end gap-0.5 h-5">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="w-1 bg-purple-400 animate-wave"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default Waveform;
