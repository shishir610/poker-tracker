import PlayersSidebar from "@/src/components/PlayersSidebar";
import PokerTable from "@/src/components/PokerTable";

export default function AdminPage() {
	return (
		<div className="flex w-full h-full">
			<PlayersSidebar />
			<div className="flex-1">
				<PokerTable />
			</div>
		</div>
	);
}
