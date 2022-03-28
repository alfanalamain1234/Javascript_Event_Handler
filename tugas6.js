function save() {
    var opsi = confirm("Apakah anda yakin ingin menyimpan?");
    if (opsi == true){
    var validasiHuruf = /^[a-zA-Z ]+$/;
    var validasiAngka = /^[0-9]+$/;
    var nama = document.getElementById("nama");
    var namas = String(document.biodata.nama.value);
    var nrp = document.getElementById("nrp");
    var nrps = String(document.biodata.nrp.value);
    var kelass = String(document.biodata.kelas.value);
    var tempats = String(document.biodata.tempat.value);
    var tgls = String(document.biodata.tgl.value);
    var alamats = String(document.biodata.alamat.value);
    var sds = String(document.biodata.sd.value);
    var smps = String(document.biodata.smp.value);
    var smks = String(document.biodata.smk.value);
    var emalis = String(document.biodata.smk.value);
    if (namas == ""){
    alert("Anda belum mengisi nama.")
    }
    else {
    if (nama.value.match(validasiHuruf)) {
    alert("Data sudah tersimpan.");
    } else {
    alert("harus huruf");
    nama.value="";
    nama.focus();
    return false;
    }
    }
    if (nrps == ""){
    alert("Anda belum mengisi NRP.")
    }
    else {
    if (nrp.value.match(validasiAngka)) {
    } else {
    alert("harus angka");
    nama.value="";
    nama.focus();
    return false;
    }
    }
    if (kelass == ""){
    alert("Anda belum mengisi kelas.")
    }
    else {
    }
    if (tempats == ""){
    alert("Anda belum mengisi tempat lahir.")
    }
    else {
    }
    if (tgls == ""){
    alert("Anda belum mengisi tanggal lahir.")
    }
    else {
    }
    if (alamats == ""){
    alert("Anda belum mengisi alamat.")
    }
    else {
    }
    if (sds == ""){
    alert("Anda belum mengisi SD.")
    }
    else {
    }if (smps == ""){
    alert("Anda belum mengisi SMP.")
    }
    else {
    }
    if (smks == ""){
    alert("Anda belum mengisi SMA.")
    }
    else {
    }
    if (emalis == ""){
    alert("Anda belum mengisi Email.")
    }
    else {
    }
    }
    }
    function agamas() {
    var x = document.getElementById("agama").value;
    alert("Anda memilih agama " +x);
    }