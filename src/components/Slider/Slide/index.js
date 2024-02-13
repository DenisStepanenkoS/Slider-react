import styles from './css/styles.module.css';
function Slide({cosmicData, dataIndex}){
    const localDataIndex = (dataIndex + cosmicData.length*(1 + Math.floor( (Math.abs(dataIndex)) / cosmicData.length))) % (cosmicData.length);
    
    
    
    return (
        <div className={styles.slide}>
            <img className={styles.slideImage} src = {cosmicData[localDataIndex].url}/>
            <div className={styles.info}>
                <h3>{cosmicData[localDataIndex].title}</h3>
                <p className={styles.explanation}>{cosmicData[localDataIndex].explanation}</p>
            </div>
        </div>
    );
}

export default Slide;