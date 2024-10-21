<template>
    <div class="sidebar-container d-flex flex-column justify-content-between">
       
        <div>
          
            <div class="text-center py-4">
                <h4 class="text-white mt-3">GIRIRAJ DIGITAL</h4>
                <span class="text-white justify-content-center">Software & Web Development Company - Umbraco Gold
                    Partner</span>
            </div>

           
            <nav>
                <ul class="list-unstyled">
                    <li class="nav-item">
                        <a href="#" class="d-flex align-items-center text-white py-2">
                            <i class="bi bi-house-door"></i>
                            <span class="ml-2">Home</span>
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="#" class="d-flex align-items-center text-primary py-2">
                            <i class="bi bi-credit-card"></i>
                            <span class="ml-2">Cards</span>
                            <i class="bi bi-arrow-right ml-auto"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="d-flex align-items-center text-white py-2">
                            <i class="bi bi-gear"></i>
                            <span class="ml-2">Transactions</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="d-flex align-items-center text-white py-2">
                            <i class="bi bi-gear"></i>
                            <span class="ml-2">Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

      
        <div class="text-center py-4">
            <a href="#" class="d-flex align-items-center  text-white">
                <i class="bi bi-box-arrow-right"></i>
                <span class="ml-2">Logout</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
};
</script>

<style scoped>
.sidebar-container {
    height: 100%;
    background-color: #003366;
    padding: 20px;
}

.nav-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-item a {
    text-decoration: none;
    font-size: 1.1rem;
    color: inherit;
}

.nav-item.active a {
    color: #007bff;
}

.ml-2 {
    margin-left: 0.5rem;
}

.ml-auto {
    margin-left: auto;
}

.text-white-50 {
    color: rgba(255, 255, 255, 0.5);
}
</style>