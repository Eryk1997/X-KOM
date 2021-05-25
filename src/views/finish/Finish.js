const Finish = () => {
  const x = JSON.parse(window.localStorage.getItem("places"))
  return (
    <div>
      <h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
      <p>Wybrałeś miejsca:</p>
      {x.map(i => (
        <h5>-rząd x{i.x+1}, miejsce y{i.y +1} (id{i.id})</h5>
      ))}
      <h3>
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji
      </h3>
    </div>
  );
};

export default Finish;
