import { StatementData } from '../createStatementData';
import { usd } from '../utils';

export function renderHtml(data: StatementData) {
  let result = `11111<h1>Statement for ${data.customerId}</h1>\n`;
  result += '<table>\n';
  result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>';
  for (let perf of data.performances) {
    result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += '</table>\n';
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>`;
  return result;
}
