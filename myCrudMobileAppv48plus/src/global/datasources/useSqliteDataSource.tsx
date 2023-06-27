import { useCallback, useState } from 'react';
import { DataSource } from 'typeorm';
import { TransactionEntry } from '../../modules/transaction-entries/entities/transaction-entry.entity';
const dataSource = new DataSource({
 database: "personal_transaction_manager.db", driver: require('expo-sqlite'), entities: [ TransactionEntry
 ],
 synchronize: true, type: "expo",
});
//Below is a custom hook that return's react's userCallback call. To be further explained in class
const useSqliteDataSource = async () => {
 const [initializedDataSource, setInitializedDataSource] = useState<DataSource | null >(null) 
 const initDataSource = useCallback(async () => {//useCallback is a hook to be explained in class. Meanwhile, 
try{
 if(!initializedDataSource){
     const _initializedDataSource = await dataSource.initialize() 
     setInitializedDataSource(_initializedDataSource); return _initializedDataSource;
 }else{ return initializedDataSource; //the one in state 
}
 }catch(error){ return null; } }, [])
 return await initDataSource();
}
export default useSqliteDataSource;