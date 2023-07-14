import { useGetMatchesRuch } from '@/hooks/queries/useGetMatchesRuch';

export default function Ruch() {
  const {data: matches, isLoading: loadingMatches} = useGetMatchesRuch()
  console.log(matches?.data[0]);
  return <>
    <ul>
      {!loadingMatches && matches?.data[0].map((m: any)=> <li key={m.id_mr}>{m.wynik_mr} {m.km_mr}</li>)}
    </ul>

  </>
}