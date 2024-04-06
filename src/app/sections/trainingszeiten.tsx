export function Trainingszeiten() {
  return (
    <section aria-label="Trainingszeiten">
      <h1 className="text-2xl mt-12">Trainingszeiten</h1>

      <table className="mx-auto border-spacing-8">
        <tbody>
          <tr>
            <th></th>
            <th>Jugendliche</th>
            <th>Erwachsene</th>
          </tr>

          <tr>
            <th>Sommer</th>

            <td className="p-4 text-center">
              Mittwoch
              <br />
              17:00 - 18.00 Uhr
            </td>

            <td className="p-4 text-center">
              Mittwoch
              <br />
              18:00 - 20:00 Uhr
            </td>
          </tr>

          <tr>
            <th>Winter</th>

            <td className="p-4 text-center">
              Sonntag
              <br />
              16:30 - 18:00 Uhr
            </td>

            <td className="p-4 text-center">
              Samstag / Sonntag
              <br />
              18:00 - 20:00 Uhr
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
